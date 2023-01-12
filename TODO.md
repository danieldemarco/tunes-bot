# TODO

## Round start

## Song submission Opens

## Song submission closes

## Song voting opens

## Song voting closes

## Round ends

## Scores posted


# Data Models

- Users
  - DiscordID
  - Nickname
  - Emoji
  - TotalPoints**
  
- Rounds
  - RoundID
  - Theme
  - SubmissionActive: bool
  - VotingActive: bool

- Submissions
  - uuid4gen()
  - Song Name
  - Artist Name
  - Song URL
  - VotesFor
  - VotesAgainst
  - User.DiscordID
  - Rounds.RoundID

- Matchups
  - uuid4gen()
  - Song1 Submissions.submissionID
  - Song2 Submissions.submissionID
  - Rounds.RoundID

- Votes //* the vote button-id={submissionid}
  - uuid4gen() UUID
  - Voter Users.DiscordID
  - Submission Submissions.SubmissionID
  - Rounds.RoundID
  

For each match up sum the votes for Song1 and Song2