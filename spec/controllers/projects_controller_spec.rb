require 'spec_helper'

describe ProjectsController do

  describe "GET 'home'" do
    it "returns http success" do
      get 'home'
      response.should be_success
    end
  end

  describe "GET 'project'" do
    it "returns http success" do
      get 'project'
      response.should be_success
    end
  end

end
