import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Menu,
  Radio,
  Row,
  Select,
  Switch,
} from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";

import Header from "../../Components/Header/Header";
import axios from "axios";
import { Graph } from "react-d3-graph";
import { useLocation } from "react-router-dom";
import {
  ArrowLeftOutlined,
  FileExcelOutlined,
  FileImageOutlined,
  FilePdfOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Prediction from "./Prediction/Prediction";
import Sider from "antd/es/layout/Sider";
import dayjs from "dayjs";
import ChatBoot from "../../Components/ChatBotComponent/ChatBotComponent";
import classes from "./GraphVisualisation.module.css";
import { Bar } from "react-chartjs-2";
import HistogramChart from "./HistogramChart/HIstogramChart";
import Loader from "../../Components/Loader/Loader";
import GlobalContext from "../../context/GlobalContext";
import { Network } from "react-vis-network";
import Rectangle from "./Rectangle/Rectangle";
import ResponseTimeGraph from "../../Components/ResponseTimeGraph";

const GraphVisualisation = (props) => {
  const {
    email,
    selectedItem,
    graphData,
    setGraphData,
    onChangeContenu,
    getGraphByContenu,
  } = props;
  // const [graphData, setGraphData] = useState({ nodes: [], edges: [] });d3
  const { loading, setLoading } = useContext(GlobalContext);
  const [collapsed, setCollapsed] = useState(false);
  const [listTypes, setListTypes] = useState([]);
  const [predictPatient, setPredictPatient] = useState(false);
  // const [selectedItem, setSelectedItem] = useState("1");
  const [filtrate, setFiltrate] = useState(false);
  const [dateDebut, setDateDebut] = useState();
  const [contenuType, setContenuType] = useState(false);
  const [dateFin, setDateFin] = useState();
  const [contenuChoisi, setContenuChoisi] = useState();
  const [histogramData, setHistogramData] = useState({});
  const [queryName, setQueryName] = useState([]);
  const labels = ["Min", "Max", "Average"];
  const [open,setOpen]=useState(false)
  const [summmary,setSummary]=useState("")
  // const values = [data.min, data.max, data.avg];

  // const onChangeContenu = (e) => {
  //   setContenuChoisi(e);
  // };
  const classify_document = (filename) => {
    const file_extension = filename
      ? filename
          .split(".")
          .pop()
          .toLowerCase()
      : "";
    console.log(file_extension);
    if (file_extension === "pdf") {
      return "#B3A492";
    } else if (["jpg", "jpeg", "png", "gif", "bmp"].includes(file_extension)) {
      return "#DADDB1";
    } else if (["xlsx", "xls", "csv", "xlsm"].includes(file_extension)) {
      return "#A7D397";
    } else if (["mp4", "avi", "mkv"].includes(file_extension)) {
      return "#BEADFA";
    } else {
      return "#D8BFD8";
    }
  };
  const sendJSONLDToBackend = async (jsonLDData) => {
    try {
      const response = await fetch(
        "http://127.0.0.1:5000/patient/transformToRDF",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonLDData),
        }
      );

      if (response.ok) {
        console.log("JSON-LD data sent successfully!");
        // Optionally handle the response from the backend
      } else {
        console.error(
          "Error sending JSON-LD data to the backend:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error sending JSON-LD data to the backend:", error);
    }
  };

  const transformToJSONLD = (nodes, edges) => {
    console.log(edges);
    const jsonLDData = {
      "@context": {
        label: "http://www.w3.org/2000/01/rdf-schema#label",
        type: "@type",
        nodes: "http://example.org/graph#nodes",
        edges: "http://example.org/graph#edges",
      },
      nodes: nodes.map((node) => ({
        "@id": node.id,
        label: node.label,
        type: "Node", // You can customize the type
        // Add more properties as needed
      })),
      edges: edges.map((edge) => ({
        "@id": edge.from + "-" + edge.to,
        source: edge.from,
        target: edge.to,
        type: "edge", // You can customize the type
        // Add more properties as needed
      })),
    };

    console.log(JSON.stringify(jsonLDData));
    sendJSONLDToBackend(jsonLDData);
  };

  const getVersions = () => {
    setLoading(true);
    axios
      .get(`http://127.0.0.1:5000/versions/${email}`)
      .then((res) => {
        const transformedData = transformGraphData(res.data);
        setGraphData(transformedData);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching versions:", error);
      });
  };

  useEffect(() => {
    selectedItem === "3" && getVersions();
  }, [selectedItem]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`/graph?patient_email=${email}`);
        const transformedData = transformGraphData(response.data);
        setGraphData(transformedData);
        response && setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching graph data:", error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   // ... (your existing useEffect logic)

  //   // Calculate histogram data

  // }, [graphData]);

  const onClickNode = (node) => {


    let summary=JSON.parse(sessionStorage.getItem("summaries"))
    if(summary){
      setOpen(true)

      let node_summary=summary.find((e)=>e.id==node)
      if(node_summary){
        setSummary(node_summary?.summary)
      }
      
    }
     
    // axios
    //   .get(`http://127.0.0.1:5000/get_node_info/${node}`)
    //   .then((res) => {
     
    //     if (res.data?.labels[0] === "Patient") {
    //       setPredictPatient(true);
    //     }

    //     if (res.data.labels[0] === "Document") {
    //       fetch(res.data.properties.filepath)
    //         .then((response) => response.blob())
    //         .then((blob) => {
    //           return new Promise((resolve, reject) => {
    //             const reader = new FileReader();
    //             reader.onloadend = () => resolve(reader.result);
    //             reader.onerror = reject;
    //             reader.readAsDataURL(blob);
    //           });
    //         });
    //       // console.log("lkj",res.data);
    //     }

    //     if (res.data.labels[0] === "Version") {
    //       console.log(JSON.parse(res.data.properties.version));
    //       const transformedData = transformGraphData({
    //         nodes: JSON.parse(res.data.properties.version).nodes,
    //         edges: JSON.parse(res.data.properties.version).edges,
    //       });
    //       setGraphData(transformedData);
    //     }
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };

  const getGraphByType = () => {
    setLoading(true);
    axios
      .get(
        `/document_types_graph?patient_email=${email}&document_types=${listTypes}`
      )
      .then((res) => {
        setLoading(false);

        const transformedData = transformGraphData(res.data);
        // console.log(res.data);
        setGraphData(transformedData);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const transformGraphData = (apiResponse) => {
    const addedFiltrateNodes = new Set(); // Track Filtrate nodes that have been added

    const nodes = apiResponse.nodes.map((node) => ({
      id: node.id,
      label: node.label || "Unknown",
      group: "patient",
      color:
        node.group === "patient"
          ? "lightblue"
          : node.group === "filtrate"
          ? "green"
          : node.group === "display"
          ? "#b00d49"
          : node.group === "Column"
          ? "#3271e7"
          : node.group === "class"
          ? "#DCDCDC"
          : node.group === "Extract"
          ? "#DB7093"
          : classify_document(node.label),
      symbolType:
        node.group === "filtrate" ||
        node.group === "display" ||
        node.group === "Extract" ? (
          "diamond"
        ) :  (
          ""
        ),
      size: node.group === "filtrate" || node.group === "display" ? 700 : 3000,
      labelText:
        node.group === "patient"
          ? `${node.info.nom} ${node.info.prenom}`
          : node.group === "filtrate"
          ? "Filtrate"
          : node.group === "display"
          ? "Display"
          : node.group === "summary"
          ? node.info.name.replace(/(.{50})/g, "$1\n")
          : node.info.name,
      info: node.info,
    }));

    const links = apiResponse?.edges
      ?.map((edge) => {
        if (edge.label === "HAS_FILTRATE" && addedFiltrateNodes.has(edge.to)) {
          return null; // Skip adding edge for duplicate Filtrate nodes
        }

        if (edge.label === "HAS_FILTRATE") {
          addedFiltrateNodes.add(edge.to); // Add Filtrate node to the set
        }
        if (edge.label === "HAS_DISPLAY" && addedFiltrateNodes.has(edge.to)) {
          return null; // Skip adding edge for duplicate Filtrate nodes
        }

        if (edge.label === "HAS_DISPLAY") {
          addedFiltrateNodes.add(edge.to); // Add Filtrate node to the set
        }
        if (
          edge.label.includes("CONTAINS with") &&
          addedFiltrateNodes.has(edge.to)
        ) {
          return null;
        }
        if (edge.label.includes("CONTAINS with")) {
          addedFiltrateNodes.add(edge.to); // Add Filtrate node to the set
        }
        if (edge.label.includes("has") && addedFiltrateNodes.has(edge.to)) {
          return null;
        }
        if (edge.label.includes("has")) {
          addedFiltrateNodes.add(edge.to); // Add Filtrate node to the set
        }
        if (edge.label.includes("Extract") && addedFiltrateNodes.has(edge.to)) {
          return null;
        }
        if (edge.label.includes("Extract")) {
          addedFiltrateNodes.add(edge.to); // Add Filtrate node to the set
        }

        return {
          id: `${edge.from}-${edge.to}`,
          source: edge?.from,
          target: edge?.to,
          value: 1,
          label: edge.label,
        };
      })
      .filter((edge) => edge !== null); // Remove null entries (skipped edges)

    return { nodes, links };
  };

  function onMouseOverLink(link) {
    // Set the color to a different color when hovering
    link.color = "orange";
  }

  // Callback when mouse out of a link
  function onMouseOutLink(link) {
    // Reset the color when hover state is removed
    link.color = "lightblue";
  }

  const graphConfig = {
    directed: true,
    node: {
      color: "lightblue",
      size: 500,
      highlightStrokeColor: "blue",
      renderLabel: true,
      labelProperty: "labelText",
      labelPosition: "center",
      wordWrap: true,
      wrapText: true,
      onClick: onClickNode,
    },
    d3: {
      alphaTarget: 0.05,
      gravity: -250,
      linkLength: 120,
      linkStrength: 2,
      disableLinkForce: false,
      // Specify the hierarchy layout
      nodeSpacing: 300, // Adjust the spacing between nodes
      treeSpacing: 300, // Adjust the spacing between branches of the tree
      nodePadding: 5, // Adjust the padding between nodes
    },
    link: {
      highlightColor: "lightblue",
      renderLabel: true,
      fontSize: 5,
      markerWidth: 6,
      selfLinkDirection: "TOP_RIGHT",
      onMouseOverLink: onMouseOverLink,
      onMouseOutLink: onMouseOutLink,
    },
  };

  const handleSwitchChange = (type) => {
    if (!listTypes.includes(type)) {
      setListTypes((prevListTypes) => {
        const updatedList = [...prevListTypes, type];
        console.log(updatedList);
        return updatedList;
      });
    } else {
      setListTypes((prevListTypes) => {
        const updatedList = prevListTypes.filter((item) => item !== type);
        console.log(updatedList);
        return updatedList;
      });
    }
  };

  const getGraphByDate = () => {
    setLoading(true);

    axios
      .get(
        `/documents_by_date_range?patient_email=${email}&start_date=${dateDebut}&end_date=${dateFin}`
      )
      .then((res) => {
        const transformedData = transformGraphData(res.data);
        setGraphData(transformedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching documents by date range:", error);
        setLoading(false);
      });
  };

  // const getGraphByContenu = () => {
  //   setLoading(true);

  //   axios
  //     .post(`http://127.0.0.1:5000/topic/multiple`, {
  //       email: email,
  //       algo: contenuChoisi,
  //     })
  //     .then((res) => {
  //       setLoading(false);

  //       const transformedData = transformGraphData(res.data);
  //       setGraphData(transformedData);
  //       console.log(contenuChoisi);
  //       if (contenuChoisi === "CSV") {
  //         let columnsHistogramData = {};

  //         transformedData.nodes.forEach((node) => {
  //           console.log(node);
  //           // if (node.group === "Column") {
  //           const columnId = node.id;
  //           const minNode = transformedData.nodes.find(
  //             (n) => n.id === `Min_${columnId}`
  //           );

  //           const maxNode = transformedData.nodes.find(
  //             (n) => n.id === `Max_${columnId}`
  //           );
  //           const avgNode = transformedData.nodes.find(
  //             (n) => n.id === `Average_${columnId}`
  //           );

  //           if (minNode && maxNode && avgNode) {
  //             columnsHistogramData[columnId] = {
  //               labels: ["Min", "Max", "Average"],
  //               datasets: [
  //                 {
  //                   label: node.info.name,
  //                   backgroundColor: [
  //                     "rgba(255, 99, 132, 0.2)",
  //                     "rgba(54, 162, 235, 0.2)",
  //                     "rgba(255, 206, 86, 0.2)",
  //                   ],
  //                   borderColor: [
  //                     "rgba(255, 99, 132, 1)",
  //                     "rgba(54, 162, 235, 1)",
  //                     "rgba(255, 206, 86, 1)",
  //                   ],
  //                   borderWidth: 1,
  //                   data: [
  //                     minNode.info.name,
  //                     maxNode.info.name,
  //                     avgNode.info.name,
  //                   ],
  //                 },
  //               ],
  //             };
  //             // }
  //           }
  //         });
  //         console.log(columnsHistogramData);

  //         setHistogramData(columnsHistogramData);
  //       }
  //     })
  //     .catch((e) => {
  //       setLoading(false);

  //       console.log(e);
  //     });
  // };

  // const getVersionByName = (e) => {
  //   axios.get(`http://127.0.0.1:5000/version?timestamp=${e}`).then((res) => {
  //     console.log("tesssst",JSON.parse(res.data.versions[0].version));
  //     const transformedData = transformGraphData({
  //       nodes: JSON.parse(res.data.versions[0].version).nodes,
  //       edges: JSON.parse(res.data.versions[0].version).edges,
  //     });
  //       setGraphData(transformedData);

  //     // setGraphData();
  //   });
  // };

  
  return (
    <>

    <Rectangle open={open} setOpen={setOpen} summmary={summmary}  />
      <div>
        <ChatBoot />

        <h3 style={{ marginTop: "3rem", color: "#2d6c8c" }}>
          {" "}
          {selectedItem === "1-1"
            ? "Synthèse basique"
            : selectedItem === "1-2"
            ? "Synthèse avancée"
            : selectedItem === "1-3"
            ? "Synthèse basée sur le contenu"
            : ""}
        </h3>

        <div
          style={{ display: "flex", flexDirection: "column" }}
          className={classes.container}
        >
          {/* {!loading  && 
          <Network graph={rdfGraph} options={{ layout: { hierarchical: false } }} />

          } */}

          {!loading ? (
            <Row>
              <div
                style={{
                  height: "50vh",
                  width: "70vw",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Graph
                  id="graph-id"
                  data={graphData}
                  config={graphConfig}
                  style={{ height: "80vh", whiteSpace: "pre-wrap" }}
                  onClickNode={onClickNode}
                />
                    {/* <ResponseTimeGraph /> */}

                {/* {histogramData && (
                  <HistogramChart histogramData={histogramData} />
                )} */}
              </div>
            </Row>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
};

export default GraphVisualisation;
