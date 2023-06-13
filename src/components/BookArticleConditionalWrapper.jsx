
import styles from '../CSS/styleSheets/BookArticleConditionalWrapper.module.css';

export const BookArticleConditionalWrapper = (Component, condition) => {
    return (props) => {
      if (condition) {
        return (
          <div className={styles.BookArticleWrapperDiv}> {/* Or replace with any wrapper component */}
            <Component {...props} />
          </div>
        );
      }
      return <Component {...props} />;
    };
  };