export type SuggestionObj = {
  _id: string;
  senderName: string;
  suggestion: string;
};

export type CardsContainerProps = {
  suggestions: SuggestionObj[];
};
