import React from 'react';
import MemberProfile from "./MemberProfile";
import {StaticQuery, graphql} from "gatsby";

const CAICommittee = () => {
    return (
        <section className="main">
            <header className="major">
                <h2>Climate Action Ilkley Committee</h2>
            </header>
            <StaticQuery
                query={graphql`
      query AllCommitteeMembers {
        allContentfulCommitteeMember(sort: {fields: order, order: ASC}) {
            edges {
              node {
                role
                person {
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
        }
      `}
                render={({allContentfulCommitteeMember}) => (
                    <ul className="features profile-pictures">
                        {allContentfulCommitteeMember.edges.map((edge, i) => {
                            console.log(edge.node)
                            let committeeMember = edge.node;
                            return (
                                <li>
                                    <MemberProfile name={committeeMember.person.name} role={committeeMember.role}
                                                   picture={committeeMember.person.profilePicture}/>
                                </li>


                            )
                        })}
                    </ul>

                )}
            />
        </section>)
}

export default CAICommittee;
