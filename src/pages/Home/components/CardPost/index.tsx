import { IIssues } from "../..";
import * as s from "./styles";
import { publishedDateRelativeToNow } from "../../../../utils/formatter";

interface ICardPost {
  item: IIssues;
  onClick: (number: number) => void;
}

export function CardPost({ item, onClick }: ICardPost) {
  function handleOnClickCard() {
    onClick(item.number);
  }

  return (
    <s.CardContainer onClick={() => handleOnClickCard()}>
      <s.TitleDetais>
        <h3>{item.title}</h3>
        <p>{publishedDateRelativeToNow(item.created_at)}</p>
      </s.TitleDetais>
      <s.CardDetailsText>{item.body}</s.CardDetailsText>
    </s.CardContainer>
  );
}
