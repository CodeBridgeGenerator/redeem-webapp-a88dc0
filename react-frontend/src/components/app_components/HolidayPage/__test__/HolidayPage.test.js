import React from "react";
import { render, screen } from "@testing-library/react";

import HolidayPage from "../HolidayPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders holiday page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <HolidayPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("holiday-datatable")).toBeInTheDocument();
    expect(screen.getByRole("holiday-add-button")).toBeInTheDocument();
});
