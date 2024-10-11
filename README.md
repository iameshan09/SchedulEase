## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/iameshan09/SchedulEase.git
   cd SchedulEase
   ```

2. Install dependencies:

   ```
   cd client && npm install
   cd ../server && npm install
   ```

3. Set up environment variables for the server:

   - Create a `.env` file in the `server` directory
   - Add this environment variables: `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `DB_PORT`, `TOKEN_SECRECT`

4. Set up environment variables for the client:

   - Create a `.env` file in the `client` directory
   - Add this environment variables: `REACT_APP_API_URL`

4. Start the development servers:
   - For the client: `cd client && npm start`
   - For the server: `cd server && node index.js`

### Hosted URLS

1. Client: https://schedulease-react.onrender.com/
2. Server: https://schedulease-backend.onrender.com
