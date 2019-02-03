/**
 * Created by will on 12/01/19.
 */
import React from 'react';
import Feature from './Feature';
import {Link} from "gatsby";

const QuestionFeature = () => {
  return (
        <Feature
          url="getinvolved#project-suggestions"
          title="Suggestions"
          blurb="We welcome projects suggestions, if you have an idea get in touch and we will see how we can support you to make it happen."
          icon="fa-question"
          iconStyle=""/>
    )
};

export default QuestionFeature;