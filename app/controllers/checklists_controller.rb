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
    @card = Card.find_by_id(params[:card_id])
    @checklist = Checklist.new(params[:checklist])
    @checklist.card = @card
    @checklist.position = @card.checklists.length
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
    @checklist = Checklist.find_by_id(params[:id])
    if @checklist
      render :edit
    else
      render :text => "404 Not Found", :status => 404
    end
  end

  def update
    @checklist = Checklist.find_by_id(params[:id])
    checklists = @checklist.card.checklists
    new_position = params[:checklist][:position].to_i
    if new_position == 0
      position_value = checklists[0].position - 1
    elsif new_position == checklists.length - 1
      position_value = (checklists.length + checklists[new_position].position) / 2
    else
      position_value == (checklists[new_position - 1].position +
                         checklists[new_position].position) / 2
    end
    params[:checklist][:position] = position_value
    if @checklist.update_attributes(params[:checklist])
      redirect_to checklist_url(@checklist)
    else
      flash.now[:notices] = @checklist.errors.full_messages
      render :edit
    end
  end


  def destroy
  end
end
