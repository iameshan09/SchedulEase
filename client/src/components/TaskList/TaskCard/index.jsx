import { DeleteOutlined, EditOutlined } from "@mui/icons-material";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { format } from "../../../utils/date.utils";
import { PRIORITY_HIGH, PRIORITY_MEDIUM } from "../../../constants/priorities";

function TaskCard({ data, _handleUpdateOpen, _handleDeleteOpen }) {
  const getGradient = () => {
    return data?.priority === PRIORITY_HIGH
      ? "linear-gradient(to bottom, rgba(240, 72, 67, 1) 0%, rgba(240, 72, 67, 0) 75%, white 25%)"
      : data?.priority === PRIORITY_MEDIUM
      ? "linear-gradient(to bottom, rgba(250, 104, 26, 1) 0%, rgba(250, 104, 26, 0) 75%, white 25%)"
      : "linear-gradient(to bottom, rgba(22, 184, 66, 1) 0%, rgba(22, 184, 66, 0) 75%, white 25%)";
  };

  return (
    <Box
      flexGrow={1}
      borderRadius={25}
      bgcolor="#f2f2f2"
      pt={10}
      px={10}
      boxShadow="#0000003d 0px 3px 8px"
    >
      <Box bgcolor="white" borderRadius={15}>
        <Box
          py={3}
          px={5}
          boxShadow="#0000003d 0px 3px 8px"
          sx={{
            background: getGradient(),
          }}
          borderRadius={15}
        >
          <Box color="white">
            <Typography
              textAlign="center"
              textTransform="uppercase"
              fontWeight={500}
            >
              {data?.priority}
            </Typography>
          </Box>
          <Box p={4} borderRadius={15} bgcolor="white">
            <Box
              border="1px dashed #d4d4d4"
              p={20}
              borderRadius={15}
              bgcolor="#fafafa"
            >
              <Box>
                <Typography
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  overflow="hidden"
                  fontSize={20}
                  fontWeight={700}
                >
                  {data?.title}
                </Typography>
              </Box>
              <Box height={55} mt={10}>
                <Typography
                  color="#a2a2a2"
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {data?.description}
                </Typography>
              </Box>
            </Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              mt={10}
              alignItems="center"
            >
              <Box color="#3a3c40">
                <IconButton
                  disableRipple
                  onClick={() => _handleDeleteOpen(data)}
                  size="small"
                  color="inherit"
                >
                  <DeleteOutlined fontSize="small" />
                </IconButton>
              </Box>
              <Typography color="#a2a2a2" fontSize={18}>
                {format(data?.due_date, "MMM, DD YYYY")}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" py={10}>
        <Box color="#3a3c40">
          <Button
            variant="text"
            size="large"
            onClick={() => _handleUpdateOpen(data)}
            startIcon={<EditOutlined />}
            color="inherit"
            sx={{ fontWeight: 700 }}
          >
            Modify
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default TaskCard;
