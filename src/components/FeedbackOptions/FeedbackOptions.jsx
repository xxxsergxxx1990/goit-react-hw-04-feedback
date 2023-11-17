import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {Object.keys(options).map(option => (
      <button
        key={option}
        type="button"
        name={option}
        onClick={()=>onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

