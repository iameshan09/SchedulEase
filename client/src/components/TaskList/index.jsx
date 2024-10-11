import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  endProgress,
  startProgress,
} from "../../redux/slices/progress.reducer";
import { getApi } from "../../api/task.api";
import {
  Add,
  AddOutlined,
  FilterAltOffOutlined,
  FilterAltOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import AddTaskDialog from "./add-task";
import { getRandomId } from "../../utils/helper.utils";
import UpdateTaskDialog from "./update-task";
import DeleteTaskDialog from "./delete-task";
import FilterPane from "./FilterPane";
import SelectedFilters from "./SelectedFilters";
import TaskCard from "./TaskCard";

function TaskList() {
  const dispatch = useDispatch();
  const [rows, setRows] = useState([]);
  const [fltRows, setFltRows] = useState([]);
  const [search, setSearch] = useState("");
  const [addOpen, setAddOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [task, setTask] = useState(null);
  const [refetchId, setRefetchId] = useState(getRandomId());
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [paneVisible, setPaneVisible] = useState(false);

  const init = async () => {
    try {
      dispatch(startProgress());
      const { data } = await getApi();
      setRows(data);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(endProgress());
    }
  };

  useEffect(() => {
    init();
  }, [refetchId]);

  const filterRows = (f) => {
    const re = new RegExp(search, "i");
    const s = re.test(f.title);
    const p = priority ? f.priority === priority : true;
    let d = true;
    if (dueDate) {
      const dateFromPicker = new Date(dueDate);
      const dateToCompare = new Date(f.due_date);
      dateFromPicker.setHours(0, 0, 0, 0);
      dateToCompare.setHours(0, 0, 0, 0);
      d = dateFromPicker.getTime() === dateToCompare.getTime();
    }
    return s && p && d;
  };

  const onFilter = () => {
    const filteredRows = rows.filter(filterRows);
    setFltRows(filteredRows);
  };

  useEffect(() => {
    onFilter();
  }, [rows, search, dueDate, priority]);

  const _handleOnSearch = (e) => {
    setSearch(e.target.value);
  };

  const _handleAddOpen = () => {
    setAddOpen(true);
  };

  const _handleUpdateOpen = (f) => {
    setTask(f);
    setUpdateOpen(true);
  };

  const _handleDeleteOpen = (f) => {
    setTask(f);
    setDeleteOpen(true);
  };

  const _handlePane = () => {
    setPaneVisible(!paneVisible);
  };

  return (
    <Box>
      <Box>
        <Typography variant="h5" fontWeight={600}>
          My Tasks
        </Typography>
      </Box>
      <Box mt={30}>
        <Grid container spacing={{ xs: 10, sm: 30 }}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box>
              <TextField
                id="search"
                type="search"
                variant="standard"
                size="small"
                onChange={_handleOnSearch}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchOutlined color="inherit" />
                    </InputAdornment>
                  ),
                }}
                placeholder="Search by title"
              />
            </Box>
          </Grid>
          <Grid
            display="flex"
            justifyContent="flex-end"
            item
            xs={12}
            sm={6}
            md={8}
            lg={9}
            gap={10}
          >
            <Box>
              <Box display={{ xs: "none", md: "block" }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={_handleAddOpen}
                  startIcon={<AddOutlined />}
                >
                  ADD
                </Button>
              </Box>
              <Box display={{ xs: "block", md: "none" }}>
                <IconButton
                  disableRipple
                  color="primary"
                  onClick={_handleAddOpen}
                >
                  <Add />
                </IconButton>
              </Box>
            </Box>
            <Box>
              <Box display={{ xs: "none", md: "block" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={_handlePane}
                  startIcon={
                    paneVisible ? (
                      <FilterAltOffOutlined />
                    ) : (
                      <FilterAltOutlined />
                    )
                  }
                >
                  Filter
                </Button>
              </Box>
              <Box display={{ xs: "block", md: "none" }}>
                <IconButton disableRipple color="primary" onClick={_handlePane}>
                  <FilterAltOutlined />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          {paneVisible ? (
            <Grid item xs={12}>
              <FilterPane setPriority={setPriority} setDueDate={setDueDate} />
            </Grid>
          ) : null}
          <Grid item xs={12}>
            <SelectedFilters
              priority={priority}
              dueDate={dueDate}
              setPriority={setPriority}
              setDueDate={setDueDate}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={30}>
              {fltRows.length ? (
                fltRows.map((e, i) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                    <TaskCard
                      data={e}
                      _handleDeleteOpen={_handleDeleteOpen}
                      _handleUpdateOpen={_handleUpdateOpen}
                    />
                  </Grid>
                ))
              ) : (
                <Grid item xs={12} display="flex" justifyContent="center">
                  <Typography fontStyle="italic" color="#a2a2a2">
                    No scheduled tasks
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <AddTaskDialog
        open={addOpen}
        setOpen={setAddOpen}
        setRefetchId={setRefetchId}
      />
      <UpdateTaskDialog
        open={updateOpen}
        setOpen={setUpdateOpen}
        setRefetchId={setRefetchId}
        task={task}
        setTask={setTask}
      />
      <DeleteTaskDialog
        open={deleteOpen}
        setOpen={setDeleteOpen}
        setRefetchId={setRefetchId}
        task={task}
        setTask={setTask}
      />
    </Box>
  );
}

export default TaskList;
