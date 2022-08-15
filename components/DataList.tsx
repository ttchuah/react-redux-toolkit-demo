const DataList = () => {
  const dispatch = useDispatch();
  const { pending, error, data } = useSelector((state) => (state as any).data);
  const onClick = () => {
    const rand = Math.round(Math.random() * 100);

    const isSuccess = rand > 20;

    const getData = (): Promise<string[]> => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          isSuccess
            ? resolve(['hello', 'goodbye', 'welcome', 'hi', 'hooray'])
            : reject(new Error('Could not fetch data'));
        }, 2000);
      });
    };
    const action = createAction<string[]>('data', getData);
    dispatch(action);
  };
  return (
    <div>
      <button onClick={onClick}>Get data</button>
      {pending ? (
        <span>Loading ...</span>
      ) : error ? (
        <span>{error.message}</span>
      ) : (
        data?.map((dataItem) => {
          return <div>{dataItem}</div>;
        })
      )}
    </div>
  );
};

export default DataList;