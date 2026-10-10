const statusElement = document.querySelector("#status");
const rowsElement = document.querySelector("#bonus-rows");
const updatedElement = document.querySelector("#updated");

function addCell(row, value) {
  const cell = document.createElement("td");
  cell.textContent = value || "Not stated";
  row.appendChild(cell);
}

async function loadBonuses() {
  try {
    const response = await fetch("./bonuses.json");

    if (!response.ok) {
      throw new Error(`Could not load JSON: ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data.casinos) || data.casinos.length !== 3) {
      throw new Error("Expected exactly three casino records.");
    }

    for (const casino of data.casinos) {
      const row = document.createElement("tr");

      addCell(row, casino.casino);
      addCell(row, casino.welcomeBonus);
      addCell(row, casino.wageringRequirement);
      addCell(row, casino.minimumDeposit);

      const sourceCell = document.createElement("td");
      const link = document.createElement("a");

      link.href = casino.sourceUrl;
      link.textContent = "View source";
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      sourceCell.appendChild(link);
      row.appendChild(sourceCell);
      rowsElement.appendChild(row);
    }

    statusElement.textContent = "Showing 3 casino offers.";

    if (data.scrapedAt) {
      updatedElement.textContent =
        `Last scraped: ${new Date(data.scrapedAt).toLocaleString()}`;
    }
  } catch (error) {
    statusElement.textContent =
      `Could not load bonus data: ${error.message}`;
  }
}

loadBonuses();