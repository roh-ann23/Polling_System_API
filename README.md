# Polling System API

Welcome to PollingAPI 

## Objective
The primary goal of PollingAPI is to empower users to engage in dynamic polling activities by creating questions, providing options, and casting votes seamlessly.

## Features
- **Question Creation**: Users can effortlessly create their own polling questions.
- **Option Addition**: Flexible options can be added to any existing question.
- **Voting Capability**: Users are enabled to cast their votes on their preferred options.
- **Question Deletion**: Deleting a question is supported, ensuring a clean and updated interface.
- **Option Removal**: Options can be removed if necessary, maintaining data integrity.
- **Comprehensive Viewing**: Detailed insights into questions, options, and vote distribution are readily accessible.

## API Routes
- `POST /questions` - Create a new polling question.
- `POST /questions/:id/options` - Add options to a specific question.
- `DELETE /questions/:id` - Delete a question.
- `DELETE /options/:id` - Remove an option.
- `PUT /options/:id/vote` - Cast a vote for a specific option.
- `GET /questions/:id` - View details of a question, including its options and vote distribution.


