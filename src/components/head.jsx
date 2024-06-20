export default function Head() {
  return (
    <div className="conter-sms-respo">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%" }}>
          <svg
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="60px"
            height="60px"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
            ></path>
          </svg>
        </div>
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                marginRight: "20px",
              }}
            >
              IP Address:
            </div>
            <div
              style={{
                border: "2px solid #00ff00",
                padding: "5px",
              }}
            >
              205.211.157.84
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                marginRight: "20px",
              }}
            >
              <a href="#">IP_ADDRESS</a> | HOST_NAME
            </div>
            <div
              style={{
                border: "2px solid #00ff00",
                padding: "5px",
              }}
            >
              www.00000.net
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
