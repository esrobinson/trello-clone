class ApplicationController < ActionController::Base
  include SessionsHelper
  include BoardsHelper
  protect_from_forgery
end
