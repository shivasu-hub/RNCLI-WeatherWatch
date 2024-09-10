export default (build: {
  query: (arg0: {
    query: (body: {location: any}) => {
      url: string;
      method: string;
    };
  }) => any;
}) =>
  build.query({
    query: (body: {location: any}) => {
      return {
        url: `search?name=${body.location}`,
        method: 'GET',
      };
    },
  });
