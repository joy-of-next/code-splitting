import { Button, Flex } from "antd";
import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <Flex vertical>
      <Flex gap="large" justify="center">
        <Link to="/">
          <Button type="link">Home</Button>
        </Link>
        <Link to="/table">
          <Button type="link">Table</Button>
        </Link>
      </Flex>

      <div
        style={{
          marginInline: "auto",
          maxWidth: "100ch",
          padding: 20,
        }}
      >
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </Flex>
  );
}
