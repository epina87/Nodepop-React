import Layout from '../layout/Layout';

function NewAdvertPage(props) {
  return (
    <Layout title="New Advert" { ...props }>
      <div>
        <input
          type="file"
          name="photo"
          onChange={event => {
            console.log(event.target.files[0]);
          }}
        ></input>
      </div>
    </Layout>
  );
}

export default NewAdvertPage;
