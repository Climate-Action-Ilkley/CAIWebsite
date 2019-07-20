import React from 'react';
import MemberProfile from "./MemberProfile";
import {StaticQuery, graphql} from "gatsby";

const CAISupporters = () => {
    return (
        <section className="main">
            <header className="major">
                <h2>Climate Action Ilkley Supporters</h2>
            </header>
            <StaticQuery
                query={graphql`
      query AllMembers {
        allContentfulMember {
            edges {
              node {

                name
                profilePicture {
                  file {
                    url
                  }

                }

              }
            }
          }
        }
      `}
                render={({allContentfulMember}) => (
                    <ul className="features profile-pictures">
                        {allContentfulMember.edges.map((edge, i) => {
                            let member = edge.node;
                            return (
                                <li>
                                    <MemberProfile
                                                   picture={member.profilePicture}/>
                                </li>


                            )
                        })}
                    </ul>

                )}
            />
        </section>)
}

export default CAISupporters;
