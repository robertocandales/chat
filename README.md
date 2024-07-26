# Chat Application

A real-time chat application built with React, styled-components, and Vite. This application supports sending and receiving text messages and images, and features automatic scrolling to the latest message.

## Features

- **Real-time messaging**: Send and receive messages instantly.
- **Image upload**: Send images through the chat.
- **Auto-scroll**: Automatically scrolls to the latest message.
- **Session management**: Initializes and manages chat sessions.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **styled-components**: CSS-in-JS library for styling React components.
- **Vite**: Next-generation build tool that provides fast development and build speeds.
- **FontAwesome**: For icons used in the chat interface.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/robertocandales/chat.git
   cd chat-application
   ```

2. **Create a `.env` file** in the root directory of the project with the following content:

   ```
   VITE_API_BASE=http://localhost:3000
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

## Usage

1. **Starting a Chat**: Click the "Start chat" button to begin a chat session. This will initialize a new session and display the chat interface.

2. **Sending Messages**: Type a message in the input field and press Enter or click the send button to send the message.

3. **Uploading Images**: Click the image upload button to select and send an image.

## File Structure

- `src/`
  - `components/` - Contains React components such as `Chat`, `Message`, etc.
  - `styles/` - Contains styled-components and other styling-related files.
  - `hooks/` - Custom React hooks like `useChat` for managing chat functionality.
  - `App.tsx` - Main application component.
  - `main.tsx` - Entry point for the React application.
- `vite.config.ts` - Vite configuration file.

## API Endpoints

- **`/init`**: Initializes a new chat session.
- **`/message`**: Sends a message to the server.
- **`/image`**: Uploads an image to the server.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **React**: For the powerful UI library.
- **styled-components**: For making styling in React easier.
- **Vite**: For fast and modern build tooling.
- **FontAwesome**: For providing the icons used in the application.
