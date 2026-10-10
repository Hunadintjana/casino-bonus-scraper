Casino Bonus Scraper

A Node.js scraper that retrieves casino bonus information from a public Casino.com page, uses the Google Gemini API to structure bonus terms, and saves the results to JSON. 
A responsive webpage displays the three extracted offers.

Live website
https://hunadintjana.github.io/casino-bonus-scraper/

Technologies

Node.js and JavaScript
Cheerio for HTML text extraction
Google Gemini API for structuring bonus information
HTML and CSS for the webpage
Requirements
Node.js (a recent LTS version)
A Google Gemini API key with API access
Installation

Clone this repository:
git clone https://github.com/Hunadintjana/casino-bonus-scraper.git

Enter the project folder:

cd casino-bonus-scraper

Install dependencies:

npm install

Create a .env file in the project root:

GEMINI_API_KEY=your_api_key_here

Replace the placeholder with your own API key. Never commit this file to Git.

Run the scraper

Run:

npm run scrape

The script fetches the public source page, checks its robots.txt rules, asks Gemini to structure the bonus data, validates the result, and writes the records to bonuses.json.

View the webpage locally

Start a static server from the project folder, for example:

npx http-server .

Open the local URL shown in the terminal.

The page reads bonuses.json and displays the casino name, bonus offer, wagering requirement, minimum deposit, and source link.

Limitations
Extracted terms should be verified against the source page.
Values missing from the source are recorded as "Not stated" rather than guessed.
GitHub Pages hosts the static webpage; it does not run the Node.js scraper.
The scraper currently processes three records from one public source and is not yet a daily production service.
Source

https://www.casino.com/zar/free-spins/

Security

API keys must remain in .env, which is excluded from version control. Never publish API keys in source code, logs, or repository files.
