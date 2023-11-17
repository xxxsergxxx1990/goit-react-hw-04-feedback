import React, { useState } from 'react';

import { Statistics } from './Statistics/Statistics.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Notification } from './Notification/Notification.jsx';
import { Section } from './Section/Section.jsx';

export const App = () => {
  const [stats, setStats] = useState({ good: 0, neutral: 0, bad: 0 });

  const feddbacknames = ['good', 'neutral', 'bad'];

 const countTotalFeedback = () => {
    const { good, neutral, bad } = stats;
    return good + neutral + bad;
  };
 const countPositiveFeedbackPercentage = () => {
    const { good } = stats;
    return Math.round((good / countTotalFeedback()) * 100);
  };

 const handleLeaveFeedback = option => {
    option === 'good' &&
      setStats(stat => ({
        ...stat,
        good: stat.good + 1,
      }));
    option === 'neutral' &&
      setStats(stat => ({
        ...stat,
        neutral: stat.neutral + 1,
      }));
    option === 'bad' &&
      setStats(stat => ({
        ...stat,
        bad: stat.bad + 1,
      }));
  };
    const total = countTotalFeedback();
    const positiveFeedback = countPositiveFeedbackPercentage();
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={stats}
          onLeaveFeedback={handleLeaveFeedback}
        />
        {total === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={stats.good}
            neutral={stats.neutral}
            bad={stats.bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        )}
      </Section>
    </>
  );
};

// export class App extends Component {
//   state = {
//     good:0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   handleLeaveFeedback = event => {
//    const {name} = event.target;
//    this.setState(state => ({ [name]: state[name] + 1 }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positiveFeedback = this.countPositiveFeedbackPercentage();
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={this.state}
//             onLeaveFeedback={this.handleLeaveFeedback}
//             />
//             { total === 0 ? (
//               <Notification message="There is no feedback"></Notification>) : (
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={total}
//                 positivePercentage={positiveFeedback}
//             />)}
//         </Section>

//       </>
//     );
//   }
// }
