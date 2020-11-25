import Head from 'next/head';
import Link from 'next/link';

const LandingComponent: React.FC = () => (
  <>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <h1>Landing</h1>
    <ul>
      <li><Link href="/">Back to home</Link></li>
      <li><Link href="/bin2dec">Binary To Decimal</Link></li>
    </ul>
  </>
);

export default LandingComponent;
