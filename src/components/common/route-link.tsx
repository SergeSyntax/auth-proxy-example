import Link from 'next/link';
import { styled } from '@material-ui/core/styles';

import MaterialLink, { LinkProps } from '@material-ui/core/Link';

const MaterialLinkStyled = styled(MaterialLink)`
  white-space: nowrap;
  padding: 0 0.5rem;
  font-weight: bold;
`;

interface Props extends LinkProps {
  href: string;
}

export const RouteLink = (props: React.PropsWithChildren<Props>): React.ReactElement => (
  <Link {...props}>
    <MaterialLinkStyled {...props}>{props.children}</MaterialLinkStyled>
  </Link>
);
