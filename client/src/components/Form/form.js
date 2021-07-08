import React, { useState, useEffect } from "react";
import { TextField, Grid, Button, Typography, Paper } from "@material-ui/core";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import useStyles from "./styles";
import { createJob, updateJob } from "../../actions/jobs";

const Form = ({ openPopup, currentId, setOpenPopup, setCurrentId }) => {
  const [jobData, setJobData] = useState({
    jobTitle: "",
    jobType: "",
    postedBy: "TPC",
    duration: "",
    salary: "",
    company: "",
    Location: {
      City: "",
      State: "",
    },
    description: {
      Info: "",
      ReqSkills: "",
      Eligibility: "",
      Rewards: "",
    },
    applyLink: "",
  });
  const job = useSelector((state) => (currentId ? state.jobs.jobs.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    if (job) setJobData(job);
  }, [job, dispatch]);

  const clear = () => {
    setCurrentId(null);
    setJobData({
      jobTitle: "",
      jobType: "",
      postedBy: "TPC",
      duration: "",
      salary: "",
      company: "",
      Location: {
        City: "",
        State: "",
      },
      description: {
        Info: "",
        ReqSkills: "",
        Eligibility: "",
        Rewards: "",
      },
      applyLink: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateJob(currentId, jobData, history));
    } else {
      dispatch(createJob(jobData, history));
    }
    clear();
  };
  return (
    <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="h6" style={{ flexGrow: 1, display: "flex", alignItems: "center", textAlign: "center" }}>
            {currentId ? `Editing ${job.jobTitle}` : "Creating Job Post"}
          </Typography>
          <Button
            className={classes.root1}
            color="secondary"
            onClick={() => {
              setOpenPopup(false);
              clear();
            }}
          >
            <CloseIcon />
          </Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Grid container>
            <Grid container alignItems="stretch" spacing={1}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField name="jobTitle" variant="outlined" label="jobTitle" fullWidth value={jobData.jobTitle} onChange={(e) => setJobData({ ...jobData, jobTitle: e.target.value })} />
                <TextField name="jobType" variant="outlined" label="jobType" fullWidth rows={4} value={jobData.jobType} onChange={(e) => setJobData({ ...jobData, jobType: e.target.value })} />
                <TextField name="salary" variant="outlined" label="salary" fullWidth rows={4} value={jobData.salary} onChange={(e) => setJobData({ ...jobData, salary: e.target.value })} />
                <TextField name="duration" variant="outlined" label="duration" fullWidth rows={4} value={jobData.duration} onChange={(e) => setJobData({ ...jobData, duration: e.target.value })} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField name="company" variant="outlined" label="company" fullWidth rows={4} value={jobData.company} onChange={(e) => setJobData({ ...jobData, company: e.target.value })} />
                <TextField name="applyLink" variant="outlined" label="applyLink" fullWidth rows={4} value={jobData.applyLink} onChange={(e) => setJobData({ ...jobData, applyLink: e.target.value })} />
                <TextField
                  name="City"
                  variant="outlined"
                  label="City"
                  fullWidth
                  rows={4}
                  value={jobData.Location.City}
                  onChange={(e) => setJobData({ ...jobData, Location: { ...jobData.Location, City: e.target.value } })}
                />
                <TextField
                  name="State"
                  variant="outlined"
                  label="State"
                  fullWidth
                  rows={4}
                  value={jobData.Location.State}
                  onChange={(e) => setJobData({ ...jobData, Location: { ...jobData.Location, State: e.target.value } })}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <TextField
                  name="Info"
                  variant="outlined"
                  label="Info"
                  multiline
                  fullWidth
                  rows={4}
                  value={jobData.description.Info}
                  onChange={(e) => setJobData({ ...jobData, description: { ...jobData.description, Info: e.target.value } })}
                />
                <TextField
                  name="ReqSkills"
                  variant="outlined"
                  label="ReqSkills"
                  multiline
                  fullWidth
                  rows={4}
                  value={jobData.description.ReqSkills}
                  onChange={(e) => setJobData({ ...jobData, description: { ...jobData.description, ReqSkills: e.target.value } })}
                />
                <TextField
                  name="Rewards"
                  variant="outlined"
                  label="Rewards"
                  multiline
                  fullWidth
                  rows={4}
                  value={jobData.description.Rewards}
                  onChange={(e) => setJobData({ ...jobData, description: { ...jobData.description, Rewards: e.target.value } })}
                />
                <TextField
                  name="Eligibility"
                  variant="outlined"
                  label="Eligibility"
                  multiline
                  fullWidth
                  rows={4}
                  value={jobData.description.Eligibility}
                  onChange={(e) => setJobData({ ...jobData, description: { ...jobData.description, Eligibility: e.target.value } })}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="small" type="submit" fullWidth>
                  Submit
                </Button>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
                  Clear
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default Form;