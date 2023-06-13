import { IIssues } from "../..";
import * as s from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ICardPost {
  item: IIssues;
}

export function CardPost({ item }: ICardPost) {
  function publishedDateRelativeToNow(date: string) {
    return formatDistanceToNow(new Date(date), {
      locale: ptBR,
      addSuffix: true,
    });
  }

  return (
    <s.CardContainer>
      <s.TitleDetais>
        <h3>{item.title}</h3>
        <p>{publishedDateRelativeToNow(item.created_at)}</p>
      </s.TitleDetais>
      <s.CardDetailsText>{item.body}</s.CardDetailsText>
    </s.CardContainer>
  );
}
