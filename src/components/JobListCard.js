import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import style from "./JobListCard.module.css";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CardActions from "@mui/material/CardActions";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import InputSearch from "./Location/InputSearch";
import AreaRange from "./Location/AreaRange";
import WorkExp from "./workExp/WorkExp";
import DatePosted from "./datePosted/DatePosted";
import Employment from "./employment/Employment";
import TagsCloud from "./TagsCloud/TagsCloud";
import data from "../database.json";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
    border: "none",
  },
  "&:before": {
    display: "none",
    border: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
  // borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const JobListCard = () => {
  const [expanded, setExpanded] = React.useState("panel1");
  const [workExp, setWorkExp] = React.useState("panel2");
  const [datePosted, setDatePosted] = React.useState("panel3");
  const numbers = [1, 2, 3, 4, 5];

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleWorkExp = (panel) => (event, newExpanded) => {
    setWorkExp(newExpanded ? panel : false);
  };

  const handleTypeOfEmployee = (panel) => (event, newExpanded) => {
    setDatePosted(newExpanded ? panel : false);
  };

  const handleDatePosted = (panel) => (event, newExpanded) => {
    setDatePosted(newExpanded ? panel : false);
  };

  console.log(data.map((i) => i.name));

  return (
    <>
      <div className={style.container}>
        <div className={style.niraj}>
          {data.map((item) => {
            return (
              <>
                {" "}
                <Card className={style.card}>
                  <CardContent>
                    <div className={style.card_container}>
                      <div>
                        <div className={style.card_content}>
                          <div className={style.photo}>
                            <div className={style.imageDiv}>
                              <p className={style.imageDivParaGraph}></p>
                            </div>
                          </div>
                          <div className={style.list_content}>
                            <a className={style.role}>{item.role}</a>
                            <small className={style.small}>{item.years}</small>

                            <span className={style.badge}>FAv</span>
                            <ul className={style.ul}>
                              <li>
                                {item.companyName}

                                <FmdGoodRoundedIcon
                                  style={{
                                    fontSize: "13px",
                                    marginLeft: "6px",
                                    color: "#74788d",
                                  }}
                                  className={style.locationIcon}
                                />
                                {item.place}
                                <AccountBalanceWalletIcon
                                  style={{
                                    fontSize: "15px",
                                    marginLeft: "6px",
                                    color: "#74788d",
                                  }}
                                  className={style.locationIcon}
                                />
                                {item.salary}
                              </li>
                            </ul>
                          </div>
                          <div className={style.sectors}>
                            <div
                              className={style.sectorSpan}
                              style={{ background: item.color }}
                            >
                              {item.tags.map(e => {
                                return (
                                  console.log()
                                )
                              })}
                            </div>
                            {/* <span
                              style={{ background: item.color }}
                             
                            >
                              {item.tag1}
                            </span> */}

                            {/* {
                              item.split(" ;")
                              .join()
                              .split(", ")
                              .map((i) => {
                                console.log(i.color)
                                return (
                                  <span className={style.sectorSpan}>{i.tag1}</span>
                                )
                              })}  */}

                            {/* {item.tag3
                              .split(" ;")
                              .join()
                              .split(", ")
                              .map((i) => {
                                return (
                                  <span className={style.sectorSpan}>{i}</span>
                                );
                              })} */}
                          </div>
                          <div className={style.favContent}>
                            <div
                            // className={
                            //   checkFav(item.sourceId)
                            //     ? style.FavoriteLiked
                            //     : style.FavoriteIcon
                            // }
                            >
                              <a>
                                <FavoriteBorderOutlinedIcon />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardActions
                    style={{ backgroundColor: "#DCDCDC	", padding: 0 }}
                  >
                    <LocalOfferOutlinedIcon />
                    <p className={style.keyword}>
                      Keywords : Ui designer , developer
                    </p>
                    <a className={style.link}>Apply now</a>
                    <KeyboardDoubleArrowRightOutlinedIcon />
                  </CardActions>
                </Card>
              </>
            );
          })}
        </div>
        <div className={style.block}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              className={style.summary}
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Location</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <InputSearch />
            </AccordionDetails>
            <AccordionDetails>
              <AreaRange />
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion
            style={{ border: "none" }}
            workExp={workExp === "panel2"}
            onChange={handleWorkExp("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>Work Experience</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <WorkExp />
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion
            style={{ border: "none" }}
            datePosted={datePosted === "panel4"}
            onChange={handleTypeOfEmployee("panel4")}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography>Type of Employment</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Employment />
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion
            style={{ border: "none" }}
            datePosted={datePosted === "panel3"}
            onChange={handleDatePosted("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Date Posted</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <DatePosted />
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion
            style={{ border: "none" }}
            datePosted={datePosted === "panel3"}
            onChange={handleDatePosted("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Tags Cloud</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TagsCloud />
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default JobListCard;
