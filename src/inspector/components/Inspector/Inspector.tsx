/// <reference lib="DOM" />
import { useEffect, useState } from "react";
import { ObjectInspector } from "react-inspector";

const graphqlServer = 'http://localhost:8000/graphql';

export function Inspector(): JSX.Element {
  const [data, setData] = useState<Record<string, unknown>>();

  useEffect(() => {
    async function loadGraph() {
      const response = await fetch(graphqlServer, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `{
        graph
      }`,
        }),
      });

      const graph = await response.json();

      setData(graph);
    }

    loadGraph().catch(console.error);
  }, []);

  if (!data) {
    return <div>loading......</div>
  }
  
  return <ObjectInspector data={data} expandLevel={6} />;
}
