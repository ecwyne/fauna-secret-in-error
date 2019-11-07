import React from 'react';
import Link from 'next/link';

const Index = () => {
    return (
        <div>
            Please go to the <Link href="/api/graphql">graphql endpoint</Link>
        </div>
    );
};

export default Index;
