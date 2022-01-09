import { Grid } from "@mui/material";
import "./App.css";
import Achivement from "./pages/Achivement/Achivement";
import OutstandingBalance from "./pages/OutstandingBalance/OutstandingBalance";
import Statement from "./pages/Statement/Statement";

function App() {
    return (
        <div className="App">
            <Grid
                container
                spacing={2}
                sx={{ alignItems: "center", justifyContent: "center" }}
            >
                <Grid item xs={12} md={4}>
                    <Achivement />
                </Grid>
                {/* <Grid item xs={12} md={4}>
                    <Achivement />
                </Grid> */}
                <Grid item xs={12} md={4}>
                    <OutstandingBalance />
                </Grid>
            </Grid>
            <Statement />
        </div>
    );
}

export default App;
