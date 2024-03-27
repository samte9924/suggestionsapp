type Suggestion = {
  id: string;
  senderName: string;
  suggestion: string;
};

type CardsContainerProps = {
  suggestions: Suggestion[];
};

export default function CardsContainer({ suggestions }: CardsContainerProps) {
  return (
    <div className="card-wrapper p-4 w-full flex flex-wrap gap-8 items-center justify-center">
      {suggestions.map((suggestion) => {
        return (
          <div key={suggestion.id} className="card">
            <div className="card-head">
              <h1 className="m-4">{suggestion.senderName}</h1>
              <hr className="border-t-zinc-600" />
            </div>
            <p className="card-body">{suggestion.suggestion}</p>
          </div>
        );
      })}
    </div>
  );
}
