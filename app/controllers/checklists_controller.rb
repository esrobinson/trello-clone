class ChecklistsController < ApplicationController

  def new
    @card = Card.find_by_id(params[:card_id])
    if @card
      render :new
    else
      render :text => "404 Not Found", :status => 404
    end
  end

  def create
    @checklist = Checklist.new(params[:checklist])
    @checklist.card = Card.find_by_id(params[:card_id])
    if @checklist.save
      redirect_to checklist_url(@checklist)
    else
      flash.now[:notices] = @checklist.errors.full_messages
      render :new
    end
  end

  def show
    @checklist = Checklist.find_by_id(params[:id])
    if @checklist
      render :show
    else
      render :text => "404 Not Found", :status => 404
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
