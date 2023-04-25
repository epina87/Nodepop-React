import { useParams } from 'react-router-dom';
import Layout from '../layout/Layout';

function AdvertPage() {
  const params = useParams();

  return (
    <Layout title="Adverts Detail">
      <div>
        <p>{params.id}</p>
        <p>{params.name}</p>
      </div>
    </Layout>
  );
}

export default AdvertPage;
