import { Link } from "react-router-dom";
import styled from "styled-components";

export const ListItemLink = styled(Link)`
  text-decoration: none;
  padding: 10px;
  color: inherit;
  -webkit-transition: color 0.3s;
  -moz-transition: color 0.3s;
  -ms-transition: color 0.3s;
  -o-transition: color 0.3s;
  transition: color 0.3s;

  &.done {
    color: #07bc0c;

    &:hover {
      color: rgba(7, 188, 12, 0.4);
    }
  }

  &.notDone {
    color: #e74c3c;

    &:hover {
      color: rgba(231, 76, 60, 0.4);
    }
  }
`;