export const HTML_SPINNER = `
    <html>
      <head>
        <style>
          body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            font-family: sans-serif;
            background: #f9f9f9;
          }
          .spinner {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .loader {
            border: 6px solid #f3f3f3;
            border-top: 6px solid #3498db;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin-bottom: 10px;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        </style>
      </head>
      <body>
        <div class="spinner">
          <div class="loader"></div>
          <div>Loading...</div>
        </div>
      </body>
    </html>`;
