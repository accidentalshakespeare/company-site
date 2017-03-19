#require "spec_helper"

describe "tickets", type: :feature, test: true do

	pending "The user can find the tickets button/link" do

		visit "/"
		expect(page).to have_button "ticket"
	end

	pending "The user visits the homepage and buys a ticket to a show" do
		visit "/"
		click_button("Tickets", match: :first)
		expect {current_url}.to match(/www.brownpapertickets.com/)
	end
end