import styled from 'styled-components';

export const StyledDetails = styled.details`
   display: flex;

   & summary {
      display: flex;
      align-items: center;
      margin-right: 8px;
      border: none;
   }

   & summary::before {
      content: "▶";

   }

   &[open] summary::before {
      content: "▼";
   
   }
`;

export const StyledSummary = styled.summary`
   display: inline;
   margin-right: 8px;

   
`;