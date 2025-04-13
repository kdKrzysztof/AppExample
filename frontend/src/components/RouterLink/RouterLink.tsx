import { Link } from '@mui/material';
import { Link as ReactRouterLink } from 'react-router-dom';

interface IRouterLink {
  href: string;
  children: string;
}

const RouterLink = ({ href, children }: IRouterLink) => {
  return (
    <Link component={ReactRouterLink} to={href}>
      {children}
    </Link>
  );
};

export default RouterLink;
