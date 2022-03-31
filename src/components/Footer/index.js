import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { media } from "../../styles";
import { color } from "../../utils";

const StyledFooter = styled.div`
  height: 5.5em;
  background-color: ${p =>
    color.scale(p.theme.colors.primary, p.theme.colors.factor * 7)};

  display: flex;
  align-items: center;
  justify-content: center;

  /* on small screen it could be 4 lines */
  ${media.extraSmall`
    height: 6.5em;
  `}

  padding: 0 15px;
`;

const StyledFooterText = styled.div`
  font-size: 0.75em;
  text-align: center;
  color: ${p => p.theme.colors.secondary};
  line-height: 1.6em;
`;

// const StyledLink = styled.a.attrs({
//   target: '_blank',
//   rel: 'noopener noreferrer',
// })`
//   color: ${p => p.theme.colors.accent};
// `;

const StyledInternalLink = styled(Link)`
  color: ${p => p.theme.colors.accent};
`;

const Red = styled.span`
  color: ${p => p.theme.colors.danger};
`;

const Footer = () => (
  <StyledFooter>
    <StyledFooterText>
      Made with
      <Red>&nbsp;❤&nbsp;</Red>
      by Neuromatch
      <br />
      <StyledInternalLink to="/terms-of-use">Terms of Use</StyledInternalLink>
      {" | "}
      <StyledInternalLink to="https://academy.neuromatch.io/about/Privacy">
        Privacy Policy
      </StyledInternalLink>
      {" | "}
      <StyledInternalLink to="https://github.com/NeuromatchAcademy/precourse/blob/master/CODE_OF_CONDUCT.md">
        Code of Conduct
      </StyledInternalLink>
      {" | "}
      <StyledInternalLink to="https://twitter.com/neuromatch">
        Twitter
      </StyledInternalLink>
    </StyledFooterText>
  </StyledFooter>
);

export default Footer;
