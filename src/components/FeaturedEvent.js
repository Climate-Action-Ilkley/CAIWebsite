import React from 'react';
import { StaticQuery } from "gatsby";

const FeaturedEvent = () => {
    <StaticQuery query={
        graphql(`
            query featuredEvent
            {
            allContentfulFeaturedEvent

        `)
    }
    render={data => {
        <div>
            <p>Title</p>
            <button>More Info</button>
        </div>
    }
    }
    />
}
