import { CommonClassProps, Photo } from '../../types';
import cl from 'classnames';
import style from './Navigation.module.scss';

interface NavigationProps extends CommonClassProps {
  disabledPrev: boolean;
  disabledNext: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
}
const Navigation: React.FC<NavigationProps> = ({
  disabledPrev,
  disabledNext,
  onPrevClick,
  onNextClick,
  className,
}) => {
  return (
    <div className={cl(className, style.navigation)}>
      <button
        disabled={disabledPrev}
        className={cl(style.navigationBtn, style.navigationBtnLeft)}
        onClick={onPrevClick}
      >
        Previous
      </button>
      <button
        disabled={disabledNext}
        className={cl(style.navigationBtn, style.navigationBtnRight)}
        onClick={onNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default Navigation;
