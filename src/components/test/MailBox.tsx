interface MailBoxProps {
  userName: string;
  messages: string[];
}

export default function MailBox({ userName, messages }: MailBoxProps) {
  return (
    <>
      <p>Hello {userName}</p>
      {messages.length > 0 ? (
        <>
          <p>You have {messages.length} unread messages</p>
          <p>Check your inbox to read them ! </p>
          <button>Open inbox</button>
        </>
      ) : (
        <p>You have no unread messages</p>
      )}
    </>
  );
}
