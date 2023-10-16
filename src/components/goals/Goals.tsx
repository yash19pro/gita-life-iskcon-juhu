import { Typography } from "@mui/material";

const Goals = () => {
    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                margin: "20px",
                justifyContent: "space-around",
            }}
            className="goals"
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <Typography variant="h2" component="h2">
                    Our Goals is to...
                </Typography>
            </div>
            <div style={{ textAlign: "center" }}>
                <Typography
                    variant="subtitle2"
                    component="h6"
                    style={{ padding: "10px" }}
                >
                    Gaining happiness and self-fulfillment in the life
                </Typography>
                <Typography
                    variant="subtitle2"
                    component="h6"
                    style={{ padding: "10px" }}
                >
                    Combining personality with proficiency for long-term success
                </Typography>
                <Typography
                    variant="subtitle2"
                    component="h6"
                    style={{ padding: "10px" }}
                >
                    Securing youngsters from self-destructive addictions that
                    harm mind and body
                </Typography>
                <Typography
                    variant="subtitle2"
                    component="h6"
                    style={{ padding: "10px" }}
                >
                    Provide soft-skill training like leadership, stress
                    management, time management etc.
                </Typography>
                <Typography
                    variant="subtitle2"
                    component="h6"
                    style={{ padding: "10px" }}
                >
                    Provide a sense of balancing between personal and
                    professional life, work and entertainment
                </Typography>
                <Typography
                    variant="subtitle2"
                    component="h6"
                    style={{ padding: "10px" }}
                >
                    Provide scientifically crafted lectures on Vedic
                    intelligence by the highly qualified faculty members
                </Typography>
                <Typography
                    variant="subtitle2"
                    component="h6"
                    style={{ padding: "10px" }}
                >
                    Finding the internal potential such as motivation,
                    concentration, tolerance, self-confidence, and kindness
                </Typography>
            </div>
        </div>
    );
};

export default Goals;
