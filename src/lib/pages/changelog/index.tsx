const logLists = [
  {
    date: '2020/11/23',
    content: '初期版を公開',
  },
  {
    date: '2024/09/07',
    content: 'アプリケーションの更新に伴い、フルリニューアル版を公開',
  },
];

const ChangeLog = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-8 text-center">
      <ul className="list-disc text-left">
        {logLists
          .sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          })
          .map((log) => (
            <li key={log.date}>
              {log.date}: {log.content}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ChangeLog;
