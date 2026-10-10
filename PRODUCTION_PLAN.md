Production Plan: Scaling to 200 Casinos

For a production system covering 200 casinos with daily updates, I would use a Node.js application hosted on a managed cloud platform such as Google Cloud Run. It supports Node.js containers and can scale as needed. I would use Cloud Scheduler to trigger a daily scraping job, with Cloud Run executing the scraper. Each source would have its own extraction rules and respectful request limits, and the system would check robots.txt and source terms before scraping.

I would store the structured bonus records in PostgreSQL, using a managed service such as Cloud SQL. Each record would include the casino, bonus terms, source URL, last-scraped timestamp, and extraction status. I would keep a history of changes so incorrect extractions could be investigated and previous values restored. Automated daily backups and point-in-time recovery would protect the database.

I would register a domain through a registrar and configure DNS to point to the hosting platform. I would enable HTTPS using the platform's managed TLS certificates. API keys and database credentials would be stored in Secret Manager rather than in source code or Git.

The daily job would run through Cloud Scheduler. I would log each casino's scrape result, HTTP status, extraction time, and validation errors. Cloud Monitoring alerts would notify me by email if a run failed, data was missing, a source changed format, or too many records failed validation. Failed jobs would use limited retries and would not overwrite valid records with incomplete data.

For a rough monthly budget, I would initially allow approximately US$30–100 for the application, database, backups, monitoring, and domain averaged over the year. Actual costs would depend on request volume, database size, AI usage, and cloud-region pricing. I would review costs and usage after the first month and set budget alerts.