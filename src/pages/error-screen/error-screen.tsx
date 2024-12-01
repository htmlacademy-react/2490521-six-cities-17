import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';

function ErrorScreen(): JSX.Element {
  return(
    <div>
      <h1>404 Not Found</h1>
      <Link to={AppRoute.Main}>Вернуться на главную страницу</Link>
    </div>
  );
}

export default ErrorScreen;
