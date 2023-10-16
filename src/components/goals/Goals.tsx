import { Typography } from "@mui/material";

const Goals = () => {
    const goals = [];

    goals.push("Gaining happiness and self-fulfillment in the life");
    goals.push("Combining personality with proficiency for long-term success");
    goals.push(
        "Securing youngsters from self-destructive addictions that harm mind and body"
    );
    goals.push(
        "Provide soft-skill training like leadership, stress management, time management etc."
    );
    goals.push(
        "Provide a sense of balancing between personal and professional life, work and entertainment"
    );
    goals.push(
        "Provide scientifically crafted lectures on Vedic intelligence by the highly qualified faculty members"
    );
    goals.push(
        "Finding the internal potential such as motivation, concentration, tolerance, self-confidence, and kindness"
    );

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
                    Goals
                </Typography>
            </div>
            <div style={{ textAlign: "center" }}>
                {goals.map((goal, id) => (
                    <Typography
                        key={id}
                        variant="subtitle2"
                        component="h6"
                        style={{ padding: "10px" }}
                    >
                        {goal}
                    </Typography>
                ))}
            </div>
        </div>
    );
};

export default Goals;
