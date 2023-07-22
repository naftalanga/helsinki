```mermaid
    sequenceDiagram
    User->>Browser: request https://studies.cs.helsinki.fi/exampleapp/notes
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    Server->>Browser: Notes HTML
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server->>Browser: CSS Document
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    Server->>Browser: CSS Document
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server->>Browser: An array with all notes
    User->>Browser: Creates a note and clicks on save button
    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Server->>Browser: Update the site
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    Server->>Browser: Notes HTML
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server->>Browser: CSS Document
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    Server->>Browser: CSS Document
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server->>Browser: An array with all notes
```

