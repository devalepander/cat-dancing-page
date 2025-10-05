import { useEffect } from 'react';
import catImage from '../assets/images/cat.svg';
import { useAnimation } from '../hooks/useAnimation';
import '../styles/animations.css';

function DancingCat() {
  const { isAnimating, toggleAnimation } = useAnimation(true);

  // 키보드 네비게이션 지원
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        toggleAnimation();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [toggleAnimation]);

  return (
    <div className="dancing-cat-container">
      <div className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}>
        <img src={catImage} alt="Dancing Cat" className="cat-image" />
      </div>

      <button onClick={toggleAnimation} className="control-button">
        {isAnimating ? '⏸ 멈추기' : '▶ 춤추기'}
      </button>

      <h1 className="title">춤추는 고양이</h1>
    </div>
  );
}

export default DancingCat;
