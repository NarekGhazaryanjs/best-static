import React, {Component} from "react";
import PropTypes from 'prop-types';
import "./Newss.css"

class News extends React.Component {
  render() {
    return (
      <div className="NewsContainer">
      <div className="news-items">
         <h4>
           
              <h3>Robin Gupta, Business Analysis Specialist:</h3>
      I  would really encourage you to take the course of Business 
      Analysis  since analysis is the backbone of what a business analyst does. 

Business  analysis is a multistage process aimed at identifying, 
analyzing and  defining the requirements that must be fulfilled 
to achieve the business  objectives. A business analyst carries 
out analysis through  elicitation, problem solving, communication and analytical skills.
 The  various roles under the Business Analysis umbrella are :
           </h4>
      </div>
      <div className="news-items news-items2">
      <h4>
        <h3>
Jason Lancaster,
 Marketing consultant who comments on cars, 
 the NBA, and occasionally politics.
         </h3>
      I guess I'm stuck on what "high math" means - are we talking about 
      passing a few Calculus classes here, or are we talking about 
      "high math" that an electrical engineer (or astrophysicist) 
      would have trouble with? If it's the former, I don't think 
      it's a good question - if you can't work through a couple of Calculus classes 
      (or some other college level math courses), you're probably not as
       analytical as you think you are.
      </h4>
      </div>
        <div className="news-items">
        <h4>
          <h3>Donald M. Vu, I refer to www.payscale.com for most of my answers:</h3>
        There's this job match tool from the career and research site,
         PayScale, which will help you discover what jobs are best for you 
         based on your skills. Just answer the questions in order for the tool 
         to generate a list of suggested jobs. See PayScale's Best Jobs Tool - What Job Is Best For You?
         There are more resources you can read from the same site above when it comes to 
        jobs. Use the search field sparingly particularly under the Career News blog.
        </h4>
        </div>

         <div className="news-items news-items4">
      <h4> 
        <h3>Junaid Mubeen
Mathematics:</h3>
      Mathematical genius is misunderstood.
       The term “genius” evokes feelings of envy. 
       It paints a picture of a pre-determined minority of people who have truly mastered a discipli
       A chosen few.

Yet there is nothing pre-determined about it.
 Mathematical genius resides within every one of us. 
 Most people just don’t know it yet. That’s because genius is fragile.
  If you don’t embrace genius and tend to it with care, it will slip away,
   leaving behind just a subdued vision of the mathematicians we could have become.
        </h4>
      </div>
        
           </div>
    );
  }
}

export default News